import { useState } from "react";
import UseModal from "../hooks/UseModal";

interface IModeCheck {
  alert: boolean;
  confirm: boolean;
  prompt: boolean;
}

function App() {
  const [mode, setMode] = useState<IModeCheck>({
    alert: false,
    confirm: false,
    prompt: false,
  });
  const [promptValue, setPromptValue] = useState<string>("");

  return (
    <>
      {mode.alert ? (
        <UseModal
          mode="alert"
          title="Alert"
          context="경고창 입니다."
          type={null}
          state={null}
          setMode={setMode}
        ></UseModal>
      ) : mode.confirm ? (
        <UseModal
          mode="confirm"
          title="Confirm"
          context="예/아니요 창 입니다."
          type={null}
          state={null}
          setMode={setMode}
        ></UseModal>
      ) : mode.prompt ? (
        <UseModal
          mode="prompt"
          title="Prompt"
          context="값 입력 창 입니다."
          type="text"
          state={{ value: promptValue, setValue: setPromptValue }}
          setMode={setMode}
        ></UseModal>
      ) : null}
      <button
        onClick={() =>
          setMode((prev) => {
            return { ...prev, alert: true };
          })
        }
      >
        경고창
      </button>
      <button
        onClick={() =>
          setMode((prev) => {
            return { ...prev, confirm: true };
          })
        }
      >
        예 아니요 창
      </button>
      <button
        onClick={() =>
          setMode((prev) => {
            return { ...prev, prompt: true };
          })
        }
      >
        프롬프트
      </button>
    </>
  );
}

export default App;
