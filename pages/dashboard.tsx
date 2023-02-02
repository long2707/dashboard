import React from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import { withAuth } from "@/hooks/HOCwithAuth";

function HomePage() {
  return <AdminLayout>dashboard</AdminLayout>;
}

export default withAuth(HomePage);
