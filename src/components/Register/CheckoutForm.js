import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import CARD_OPTIONS from './CardOptions'
import './CardSectionStyle.css';

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [cardComplete, setCardComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [billingDetails] = useState({
    email: 'jayflores139@gmail.com',
    phone: '09105145832',
    name: 'Joemy',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) return

    if (error) {
      elements.getElement('card').focus()
      return
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    })

    if (result.error) {
      console.log(result.error.message);
    } else {
      stripeTokenHandler(result.token, payload);
    }

    if (payload.error) {
      setError(payload.error);
    }
  }

  async function stripeTokenHandler(token, payload) {
    setProcessing(true);
    const data = {
      token: token.id,
      email: payload.paymentMethod.billing_details.email,
      name: payload.paymentMethod.billing_details.name,
      phone: payload.paymentMethod.billing_details.phone,
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/handle_payment`, data);
      console.log(response)
      setPaymentMethod(payload.paymentMethod);
      setProcessing(false);
    } catch(err) {
      console.log(err.message)
      setPaymentMethod(`${err.message}. Please try again.`);
      setProcessing(false);
    }
  }

  return processing ? (
    <div className="Result">
      <div className="ResultMessage">
        {paymentMethod || `Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod.`}
      </div>
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>

      <SubmitButton 
        processing={processing} 
        error={error} 
        disabled={!stripe}>
        <b>Pay $497</b>
      </SubmitButton>

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </form>
  )
}

const CardField = ({onChange}) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
)

const SubmitButton = ({processing, error, children, disabled}) => (
  <Button
    color="primary"
    type="submit"
    variant="contained"
    fullWidth
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </Button>
)

const ErrorMessage = ({children}) => (
  <div className="ErrorMessage text-danger" role="alert">
    {children}
  </div>
)


export default React.memo(CheckoutForm)