const staffList = require("./staffList");

staff = staffList.staffList()

module.exports = {
    staff: function () {
        return staff
    }
}