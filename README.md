# Setting Up and Using Postal Code Information App with Material-UI

## 1. Installation

### Prerequisites
- Make sure you have Node.js installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install and set-up:
   ```bash
   npm install
   npm start
   ```

## Usage and Features

### 1. Enter Postal Code and Select Country

- Choose a country from the dropdown and enter a valid postal code in the text field.

### 2. Fetch Location Information

- Click the "Submit" button to fetch location information based on the entered postal code and selected country.

- Once the data is fetched, the app will display the information, including the country name, state, and a list of places.

- **Feature:** The location details are presented in a clear and organized table format for easy viewing.

### 4. Error Handling

- **Error Handling:** If there is an issue with the API call or the entered data is invalid, the page will gracefully handle errors and display an error message using toast notifications.
