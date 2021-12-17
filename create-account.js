function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputpin) {
            if (inputpin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputpin, depositAmount) {
            if (inputpin !== pin) return "Invalid PIN.";
            else {
                amount += depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
            }
        },
        withdraw(inputpin, withdrawAmount) {
            if (inputpin !== pin) return "Invalid PIN.";
            else {
                if (withdrawAmount <= amount) {
                    amount -= withdrawAmount;
                    return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`
                }
                else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
            }
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) return "Invalid PIN.";
            else {
                pin = newPin;
                return "PIN successfully changed!";
            }
        }
    }
}

module.exports = { createAccount };
