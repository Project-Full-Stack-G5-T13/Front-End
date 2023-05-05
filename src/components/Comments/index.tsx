import { useParams } from "react-router-dom";
import { Div } from "./styled";
import img from "../../assets/default-user-image.png";
import { useContext, useEffect, useState } from "react";
import { AdsContext } from "../../contexts/AdsContext";
import api from "../../services/api";
import moment from "moment";
import { IComment } from "../../contexts/AdsContext";
import * as io from "socket.io-client";

const socket = io.connect(import.meta.env.VITE_BACKEND_HOST);

function Comments() {
  const { setComments, comments } = useContext(AdsContext);
  const [ticking, SetTicking] = useState(0);

  const { id } = useParams();

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
          </section>
        ))}
      </Div>
    </>
  );
}

export default Comments;
