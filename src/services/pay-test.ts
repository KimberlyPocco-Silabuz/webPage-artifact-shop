export const paymentJSON = (name: string, price: number) => {
  return {
    additional_info: {
      items: [
        {
          id: "1",
          title: name,
          description:
            "Producto Point para cobros con tarjetas mediante bluetooth",
          category_id: "electronics",
          quantity: 1,
          unit_price: price,
        },
      ],
      payer: {
        first_name: "Kimberly",
        last_name: "Pocco",
        phone: {
          area_code: "51",
          number: "946169772",
        },
      },
    },
    description: "Payment for product",
    installments: 1,
    token: "",
    payer: {
      entity_type: "individual",
      type: "customer",
      email: "kimberlypocco@gmail.com",
    },
    payment_method_id: "visa",
    transaction_amount: price,
  };
};
