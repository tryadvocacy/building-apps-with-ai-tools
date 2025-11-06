# Budget Tracker - Import from File

A budget tracking application that allows you to import financial data from CSV or JSON files and visualize it with a beautiful, modern interface.

## Features

- **File Import**: Upload CSV or JSON files containing budget data
- **Receipt Upload**: Upload grocery and utilities receipts (JSON format) for the past 6 months
- **Drag & Drop**: Simply drag and drop files onto the upload area
- **Multiple Formats**: Supports both CSV and JSON file formats
- **Data Visualization**: 
  - Expense category breakdown (doughnut chart)
  - Monthly income vs expenses (bar chart)
- **Receipt Analytics**:
  - Grocery spending by category (doughnut chart)
  - Grocery spending over time (line chart)
  - Utilities spending by provider (bar chart)
  - Utilities spending over time (line chart)
- **Statistics Dashboard**: 
  - Total income
  - Total expenses
  - Net balance
  - Transaction count
- **Receipt Spending Metrics**:
  - Total grocery spending
  - Total utilities spending
  - Average grocery per trip
  - Average utilities per month
  - Receipt counts
- **Data Export**: Export your data back to CSV or JSON
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## File Format Requirements

### CSV Format

The CSV file should have the following columns:
- `Type`: Either "Expense" or "Income"
- `Name`: Description of the transaction
- `Amount`: Numeric value (e.g., 125.50)
- `Category`: Category name (e.g., Food, Rent, Salary)
- `Date`: Date in YYYY-MM-DD format (e.g., 2024-01-15)

Example:
```csv
Type,Name,Amount,Category,Date
Expense,Grocery Shopping,125.50,Food,2024-01-15
Income,Salary,3500.00,Salary,2024-01-01
```

### JSON Format

The JSON file can be structured in multiple ways:

**Option 1: Object with expenses and income arrays**
```json
{
  "expenses": [
    {
      "name": "Grocery Shopping",
      "amount": 125.50,
      "category": "Food",
      "date": "2024-01-15",
      "type": "expense"
    }
  ],
  "income": [
    {
      "name": "Salary",
      "amount": 3500.00,
      "category": "Salary",
      "date": "2024-01-01",
      "type": "income"
    }
  ]
}
```

**Option 2: Array of transactions**
```json
[
  {
    "name": "Grocery Shopping",
    "amount": 125.50,
    "category": "Food",
    "date": "2024-01-15",
    "type": "expense"
  }
]
```

**Option 3: Object with transactions array**
```json
{
  "transactions": [
    {
      "name": "Grocery Shopping",
      "amount": 125.50,
      "category": "Food",
      "date": "2024-01-15",
      "type": "expense"
    }
  ]
}
```

## Field Mapping

The application automatically maps common field names:
- **Type/Transaction Type**: `type`, `transactiontype`, `transaction_type`
- **Name/Description**: `name`, `description`, `desc`, `item`, `source`, `title`
- **Amount**: `amount`, `value`, `price`, `cost`
- **Category**: `category`, `cat`, `expense_category`, `income_category`
- **Date**: `date`, `transaction_date`, `date_created`, `timestamp`

## Usage

1. Open `index.html` in a web browser
2. **Import Budget Data**: Click "Choose File" or drag and drop a CSV or JSON file
3. **Upload Receipts**: Use the "Upload Receipts" section to upload grocery and utilities receipts (JSON format)
   - You can select multiple receipt files at once
   - Receipts are automatically categorized as grocery or utilities
4. The data will be automatically imported and displayed
5. View statistics, charts, and transaction tables
6. **Receipt Metrics**: After uploading receipts, view spending metrics and analytics
7. Export your data or clear it as needed

## Receipt Format

### Grocery Receipts

Grocery receipts should be JSON arrays with the following structure:

```json
[
  {
    "receiptType": "grocery",
    "store": "Whole Foods Market",
    "date": "2024-01-05",
    "total": 87.45,
    "items": [
      {"name": "Organic Bananas", "price": 3.99, "category": "Produce"},
      {"name": "Organic Milk", "price": 5.49, "category": "Dairy"}
    ],
    "paymentMethod": "Credit Card",
    "receiptNumber": "WF-2024-001234"
  }
]
```

### Utilities Receipts

Utilities receipts should be JSON arrays with the following structure:

```json
[
  {
    "receiptType": "utilities",
    "provider": "Pacific Gas & Electric",
    "service": "Electricity & Gas",
    "date": "2024-01-15",
    "billingPeriod": "2023-12-15 to 2024-01-15",
    "total": 145.67,
    "breakdown": {
      "electricity": 89.45,
      "gas": 42.30,
      "delivery": 8.92,
      "taxes": 5.00
    },
    "usage": {
      "electricity_kwh": 485,
      "gas_therms": 42
    },
    "paymentMethod": "Auto Pay",
    "accountNumber": "PG&E-123456789",
    "dueDate": "2024-02-05"
  }
]
```

## Sample Files

- `sample-budget-data.csv`: Example CSV file with sample transactions
- `sample-budget-data.json`: Example JSON file with sample transactions
- `sample-grocery-receipts.json`: Example grocery receipts with itemized purchases
- `sample-utilities-receipts.json`: Example utilities receipts for past 6 months (electricity, gas, internet, water)

## Browser Compatibility

Works in all modern browsers that support:
- FileReader API
- LocalStorage
- ES6 JavaScript features
- Chart.js library

## Data Storage

All imported data is stored in the browser's localStorage, so it persists between sessions.

## License

This is a demo application for educational purposes.
