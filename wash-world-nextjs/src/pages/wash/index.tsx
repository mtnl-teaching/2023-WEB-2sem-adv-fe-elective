import {
  countdown,
  selectWashInfo,
  WashProgressInfo,
  WWProgramInfo,
} from "@/store/slices/washSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/pageStyles/Wash.module.css";
import { useEffect, useState } from "react";
import { clearInterval } from "timers";
import { useRouter } from "next/router";

export default function WashInProgress() {
  const washInfoState: WashProgressInfo = useSelector(selectWashInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loop, setLoop] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(countdown());
    }, 1000);

    // @ts-ignore
    setLoop(interval);

    return () => {
      clearInterval(loop);
    };
  }, []);

  useEffect(() => {
    if (washInfoState.washFinished) {
      router.push("/");
    }
  }, [washInfoState.washFinished]);

  return (
    <div className={styles.container}>
      <h1>
        Tid tilbage {washInfoState.min}:{washInfoState.sec}
      </h1>
      <p>Tak for dit valg af vores {washInfoState.program} vask</p>
    </div>
  );
}
