import { useParams } from "react-router-dom";
import { Div } from "./styled";
import img from "../../assets/default-user-image.png";
import { useContext, useEffect, useState } from "react";
import { AdsContext } from "../../contexts/AdsContext";
import api from "../../services/api";
import moment from "moment";
import { IComment } from "../../contexts/AdsContext";
import * as io from "socket.io-client";
import CommentsModal from "../CommentsEditModal";
import { toast } from "react-toastify";

const socket = io.connect(import.meta.env.VITE_BACKEND_HOST);
const token = window.localStorage.getItem("@Motors:token");

function Comments() {
  const { setComments, comments } = useContext(AdsContext);
  const [ticking, SetTicking] = useState(0);
  const { id } = useParams();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState<IComment | null>(null);

  const handleEditComment = (comment: IComment) => {
    setSelectedComment(comment);
    setShowEditModal(true);
  }
  
  const handleDeleteComment = (comment: IComment) => {
    setSelectedComment(comment);
    setShowDeleteModal(true);
  }
  
  const handleCloseModals = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  }

  type Props = {
    comment: IComment;
    onClose: () => void;
  };

  function EditCommentModal({ comment, onClose }: Props) {
    const [newComment, setNewComment] = useState(comment.description);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNewComment(event.target.value);
    };

    const handleSave = () => {
      onClose();
    };

    return (
      <CommentsModal onClose={onClose}>
        <h2>Editar Comentário</h2>
        <textarea value={newComment} onChange={handleInputChange} />
        <button onClick={handleSave}>Editar</button>
        <button onClick={onClose}>Voltar</button>
      </CommentsModal>
    );
  }

  function DeleteCommentModal({ comment, onClose }: Props) {
    const handleDelete = () => {
      api
        .delete(`/comments/${comment.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const notDeletedComment = comments.filter((comment) => comment.id !== comment.id);
          setComments(notDeletedComment);
          toast.success("Comentário deletado com sucesso!", {
            pauseOnHover: false,
          });
        })
        .catch((error) => console.log(error));
        onClose()    
    }
        return (
          <CommentsModal onClose={onClose}>
            <h2>Excluir Comentário</h2>
            <p>Você tem certeza que quer deletar esse comentário?</p>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={onClose}>Não</button>
          </CommentsModal>
        );
  }


//

  useEffect(() => {
    socket.emit("join_room", id);

    (async () => {
      const response = await api.get(`/comments/${id}`);
      setComments(response.data);
    })();
  }, []);

  useEffect(() => {
    socket.on("received_comments", (data) => {
      setComments(data);
    });

    setComments(comments);
  }, [socket, ticking]);

  setInterval(() => { SetTicking(Math.random()) }, 30000);

  const elapsedTime = (created_at: string): string => {
    const diff = moment().diff(new Date(created_at));
    const time = moment.utc(diff);

    const hours = Number(time.format("HH"));
    const minutes = Number(time.format("mm"));
    const seconds = Number(time.format("ss"));

    switch (true) {

      case hours >= 1 && hours <= 24:

        if (hours > 1) {
          return `há ${hours} horas`;
        } else {
          return `há ${hours} hora`;
        }

      case minutes >= 1 && minutes <= 60:

        if (minutes > 1) {
          return `há ${minutes} minutos`;
        } else {
          return `há ${minutes} minuto`;
        }

      default:

        if (seconds > 1) {
          return `há ${seconds} segundos`;
        } else {
          return `há ${seconds} segundo`;
        }
    };
  };

  return (
    <>
      <Div>
        <h3>Comentários</h3>
        {comments.length > 0 && comments.map((comment: IComment) => (
          <section key={comment.id}>
            <div className="profile-comment">
              <img
                src={comment.user?.image_url.startsWith("https://") ? comment.user.image_url : img}
                alt={`foto de perfil de ${comment.user.name}`}
              />
              <h4>{comment.user.name}</h4>
              <span>{elapsedTime(comment.created_at)}</span>
            </div>
            <p>{comment.description}</p>
            <div>
              <button onClick={() => handleEditComment(comment)}>Editar</button>
              <button onClick={() => handleDeleteComment(comment)}>Excluir</button>
            </div>
          </section>
        ))}
      </Div>
      {showEditModal && (
      <CommentsModal onClose={handleCloseModals}>
        <EditCommentModal
          comment={selectedComment}
          onClose={handleCloseModals}
        />
      </CommentsModal>
    )}
    {showDeleteModal && (
      <CommentsModal onClose={handleCloseModals}>
        <DeleteCommentModal
          comment={selectedComment}
          onClose={handleCloseModals}
        />
      </CommentsModal>
    )}
    </>
  );
}

export default Comments;
