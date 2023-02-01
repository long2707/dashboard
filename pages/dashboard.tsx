import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function HomePage() {
  const route = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      route.push("/auth/login");
    },
  });
  if (status === "loading") return <p>Loading...</p>;
  return <h1>Hello</h1>;
}

export default HomePage;
