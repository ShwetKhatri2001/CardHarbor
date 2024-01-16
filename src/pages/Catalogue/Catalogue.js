import React from "react";
import Header from "../../components/PageHeader/PageHeader";
import CatalogueList from "../../components/CatalogueList/CatalogueList";

const Catalogue = () => {
  return (
    <>
      <Header title={"Catalogue"} />
      <CatalogueList />
    </>
  );
};

export default Catalogue;
