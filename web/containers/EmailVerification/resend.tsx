import { useResendVerificationEmailMutation } from "@codegen/generated/graphql";
import SubmitButton from "@components/Buttons/SubmitButton";
import { errorToast, successToast } from "@components/Toast";
import { AuthContext } from "@utils/authContext";
import { differenceInSeconds, parseISO } from "date-fns";
import { useContext, useEffect, useState } from "react";

const ResendEmailVerification = () => {
  const { user } = useContext(AuthContext);
  const [now, setNow] = useState(new Date());
  const [
    resendVerificationEmail,
    { loading },
  ] = useResendVerificationEmailMutation();

  useEffect(() => {
    if (secondsDifference <= 0) {
      const timer = setTimeout(() => {
        setNow(new Date());
      }, 1000);

      return () => clearTimeout(timer);
    }

    return;
  });

  const handleResendVerificationEmail = async () => {
    try {
      await resendVerificationEmail();
      successToast("Email sent. Please check your inbox.");
    } catch (err) {
      errorToast("Something went wrong");
    }
  };

  const secondsDifference = differenceInSeconds(
    now,
    parseISO(user?.verificationResendLimit),
  );
  const minutesLeft = Math.floor(Math.abs(secondsDifference / 60));
  const secondsLeft = Math.abs(secondsDifference % 60);
  return (
    <>
      <h3>
        Your email is not verified yet. Click the link in the email you received
        upon registration or resend the verification email.
      </h3>
      {secondsDifference > 0 ? (
        <SubmitButton
          onClick={handleResendVerificationEmail}
          disabled={loading}
        >
          Resend
        </SubmitButton>
      ) : (
        <div>
          <span>Email resend will be available again in</span>
          <span>
            {`${minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:${
              secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
            }`}
          </span>
        </div>
      )}
    </>
  );
};

export default ResendEmailVerification;
