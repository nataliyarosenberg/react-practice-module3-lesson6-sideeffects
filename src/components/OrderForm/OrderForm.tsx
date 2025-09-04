import { useId } from "react";

export default function OrderForm() {
    const selectId = useId();// must be called outside of the handleOrder functionas the top level of the component
    const handleOrder = (formData: FormData) => {
      
    const delivery = formData.get("delivery") as string;
    const restrictions = formData.getAll("restrictions") as string[];
    const deliveryTime = formData.get("deliveryTime") as string;
    console.log("Delivery restrictions:", restrictions, "Preferred delivery time:", deliveryTime, "Delivery:", delivery);
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>
      <fieldset>
        <legend>Delivery method:</legend>

        <label>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00–12:00)</option>
        <option value="afternoon">Afternoon (12:00–16:00)</option>
        <option value="evening">Evening (16:00–20:00)</option>
      </select>

      <button type="submit">Place order</button>
    </form>
  );
}
