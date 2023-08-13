import React, { useEffect, useState } from "react";
import "./Pay.css";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import Checkoutform from "../../components/Checkoutform/Checkoutform";

const stripePromise = loadStripe("pk_test_51NdQoaSFqKKmEvHbxK3WDqhrwc06dkCQb3ugom5HPazZmbzElTGuVVvEkMp5DQ1uSSxInQqjudcgCCviHZIdPUN700vRhFiKG0");


const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await newRequest.post(
              `/order/create-payment-intent/${id}`
            );
            setClientSecret(res.data.clientSecret);
          } catch (err) {
            console.log(err);
          }
        };
        makeRequest();
      }, []);
    
      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
    
      return <div className="pay">
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <Checkoutform />
            </Elements>
          )}
      </div>;
};

export default Pay;