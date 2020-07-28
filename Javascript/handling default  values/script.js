// DEFAULT VALUES
function orderChickenWith(sidedish)
{
  // if(sidedish === undefined)
  // {
  //   sidedish = "hitesh!";
  // }
  sidedish = sidedish || "whatever!";
  console.log("Chicken With " + sidedish);
}
orderChickenWith("manish");
orderChickenWith();