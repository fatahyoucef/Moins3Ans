const eurotodzd = 143.29;
const experttaxe = 15000;
const eurotodzdnoir = 238;
const Custompercentage = 0.1962;

document.getElementById("eurotodzd").innerText = eurotodzd;
document.getElementById("experttaxe").innerText = experttaxe + " DZD";
document.getElementById("eurotodzdnoir").innerText = eurotodzdnoir;
document.getElementById("Custompercentage").innerText = Custompercentage*100 + "%";

function calculateCosts() {
  const carPrice = parseFloat(document.getElementById("carPrice").value);
  const shippingCost = parseFloat(
    document.getElementById("shippingCost").value
  );
  const engineType = document.getElementById("engineType").value;

  if (isNaN(carPrice) || isNaN(shippingCost)) {
    alert(
      "Veuillez entrer des chiffres valides pour le prix de la voiture et le coût d'expédition."
    );
    return;
  }

  // Calculate the price without VAT
  const pricewithoutTva = carPrice * 0.833;
  const priceWithShipping = pricewithoutTva + shippingCost;

  // Custom tax calculation logic
  const customTax = priceWithShipping * Custompercentage;

  // Calculate the final cost including custom tax
  const totalCost = priceWithShipping + customTax;
  const customTaxValueDZD = customTax * eurotodzd;
  const totalCostDZD =
    priceWithShipping * eurotodzdnoir + customTaxValueDZD + experttaxe;

  document.getElementById("customTaxValue").innerText = customTax.toFixed(2);
  document.getElementById("customTaxValueDZD").innerText = (
    customTaxValueDZD + experttaxe
  ).toFixed(2);
  document.getElementById("carPriceWithoutTva").innerText =
    pricewithoutTva.toFixed(2);
  document.getElementById("finalPriceValue").innerText = totalCost.toFixed(2);
  document.getElementById("finalPriceValueDZD").innerText =
    totalCostDZD.toFixed(2);
}

// Optionally, fetch average price from an API
// async funct
