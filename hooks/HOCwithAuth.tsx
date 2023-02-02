import { LoadingScreen } from "@/components/common/Loading";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import React from "react";

// eslint-disable-next-line react/display-name
export const withAuth = (Component: React.ComponentType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const route = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      route.push("/auth/login");
    },
  });
  if (status === "loading") return <LoadingScreen />;
  return <Component {...props} />;
};
