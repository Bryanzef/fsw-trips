"use client";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import CurrencyInput from "react-currency-input-field";

export default function TripSearch() {
  return (
    <>
      <div className="container mx-auto p-4 bg-searchBg bg-center bg-cover">
        <h1 className="font-semibold text-2xl text-center ">
          Encontre a sua <span className="text-primary"> próxima Viagem </span>
        </h1>
        <div className="flex flex-col mt-5 gap-4">
          <Input placeholder="Para onde você quer ir🤔?" />
          <div className="flex gap-4">
            <DatePicker
              placeholderText="Data de Ida"
              onChange={() => {}}
              className="w-full
            "
            />
            <CurrencyInput placeholder="Orçamento" />
          </div>
          <Button>Buscar</Button>
        </div>
      </div>
    </>
  );
}
