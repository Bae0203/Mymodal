import { Dispatch, SetStateAction } from "react";
import * as S from "../style/modalStyle";
interface IModeCheck {
  alert: boolean;
  confirm: boolean;
  prompt: boolean;
}
interface IModalInformation {
  mode: string;
  title: string;
  context: string;
  type?: string | null;
  state?: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  } | null;
  setMode: Dispatch<SetStateAction<IModeCheck>>;
}

const UseModal = (props: IModalInformation) => {
  return (
    <S.Background>
      <S.DetailBox>
        <S.Title>{props.title}</S.Title>
        <S.Context>{props.context}</S.Context>
        <S.ButtonWrap>
          {props.mode === "alert" ? (
            <S.ButtonModal
              onClick={() =>
                props.setMode((prev) => {
                  return { ...prev, alert: false };
                })
              }
            >
              ㅇㅋ
            </S.ButtonModal>
          ) : props.mode === "confirm" ? (
            <>
              <S.ButtonModal
                onClick={() =>
                  props.setMode((prev) => {
                    return { ...prev, confirm: false };
                  })
                }
              >
                ㄴㄴ
              </S.ButtonModal>
              <S.ButtonModal
                onClick={() =>
                  props.setMode((prev) => {
                    return { ...prev, confirm: false };
                  })
                }
              >
                ㅇㅋ
              </S.ButtonModal>
            </>
          ) : props.mode === "prompt" && props.state && props.type ? (
            <>
              <S.InputModal
                type={props.type}
                value={props.state?.value}
                onChange={(changeValue) =>
                  props.state?.setValue(changeValue.target.value)
                }
              />
              <S.ButtonModal
                onClick={() =>
                  props.setMode((prev) => {
                    return { ...prev, prompt: false };
                  })
                }
              >
                ㅇㅋ
              </S.ButtonModal>
            </>
          ) : null}
        </S.ButtonWrap>
      </S.DetailBox>
    </S.Background>
  );
};

export default UseModal;
