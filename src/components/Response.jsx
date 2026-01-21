import { useEffect } from "react";
import "../App.css";

function Response({ userPrompt, loading, response }) {

  useEffect(() => {
    console.log(userPrompt);
    console.log(loading);
    console.log(response);
  }, []);

  return (
    <div className="response-container">

      {userPrompt && (
        <div className="user-row">
          <div className="user-bubble">
            <p>{userPrompt}</p>
          </div>
        </div>
      )}

      {(loading || response) && (
        <div className="ai-row">
          <div className="ai-icon">✦</div>

          <div className="ai-bubble">
            {loading ? (
              <div className="skeleton">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <p>{response}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Response;
