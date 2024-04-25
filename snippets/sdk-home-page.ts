const code = `
import loafSDK from "dataloaf";

const loaf = loafSDK.init(
  "https://a23jnafn2nnlasfd.loaf-api-gateway.us-east-1.amazonaws.com/bake-stage"
);

async function createUser(req, res) {
  const { email, fullName, address } = req.user;

  const device = req.headers["user-agent"];
  const eventLocation = req.headers["x-location"];

  try {
    await loaf.makeUser(email, { fullName, address });
    await loaf.sendEvent("create account", username, { device, eventLocation });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
`;

export default {
  code,
};
