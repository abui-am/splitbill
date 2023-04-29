import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Noto_Sans } from "next/font/google";
import "~/styles/globals.css";
import { api } from "~/utils/api";
const notoSans = Noto_Sans({
  variable: "--noto-font",
  weight: ["500", "400", "700", "600"],
  subsets: ["cyrillic"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={notoSans.variable}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
