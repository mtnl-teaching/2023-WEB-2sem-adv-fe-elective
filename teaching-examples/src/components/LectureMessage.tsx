import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

const channel = supabase.channel("adv-fe");

export default function LectureMessage() {
  useEffect(() => {
    channel
      .on("broadcast", { event: "message" }, (payload) => console.log(payload))
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          // your callback function will now be called with the messages broadcast by the other client
        }
      });
  }, []);

  function handleClick() {
    channel.send({
      type: "broadcast",
      event: "message",
      payload: "Hello from Mathias :)",
    });
  }
  return (
    <>
      <button onClick={handleClick}>Send message please</button>
    </>
  );
}
