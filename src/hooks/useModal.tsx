import { Dispatch, SetStateAction } from "react";
import * as S from "../style/modalStyle";

interface IModalInformation {
  mode: string;
  title: string;
  context: string;
  type?: string | null;
  state?: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  } | null;
}

const UseModal = (props: IModalInformation) => {
  return (
    <S.Background>
      <p>{props.title}</p>
      <p>{props.context}</p>
      {props.mode === "alert" ? (
        <button>ㅇㅋ</button>
      ) : props.mode === "confirm" ? (
        <>
          <button>ㅇㅋ</button>
          <button>ㄴㄴ</button>
        </>
      ) : props.mode === "prompt" && props.state && props.type ? (
        <>
          <input
            type={props.type}
            value={props.state?.value}
            onChange={(changeValue) =>
              props.state?.setValue(changeValue.target.value)
            }
          />
          <button>ㅇㅋ</button>
        </>
      ) : null}
    </S.Background>
  );
};

export default UseModal;
