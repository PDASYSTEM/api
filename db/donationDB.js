const pool = require("./pool");

//create donation table if not there
const createDonationTable = async () => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS donation(name text PRIMARY KEY, amount integer);"
  );
};

module.exports.getDonation = async () => {
  await createDonationTable();
  let result = await pool.query("select * from donation ORDER BY amount DESC;");
  if (result.rowCount) {
    return result.rows;
  } else {
    return [];
  }
};
module.exports.addDonation = async (name, amount) => {
  try {
    await createDonationTable();
    await pool.query("INSERT INTO donation VALUES($1,$2);", [name, amount]);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
