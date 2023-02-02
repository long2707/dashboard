import React from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import { withAuth } from "@/hooks/HOCwithAuth";

type Props = {};

function ProductPage() {
  return <AdminLayout>dddd</AdminLayout>;
}

export default withAuth(ProductPage);
