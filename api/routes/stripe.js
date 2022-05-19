const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51L0vUoFBXpmD030FvBimyC6e6HHv3C2HYmeBokDKrjYvJmtJdaM9hlVfFhLkjQEZsft7qcwwUdhWFDSSPyFeyxG7003ZPN4vgd"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "PLN",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
