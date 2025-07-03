# Spreadsheet Clone – React Intern Assignment

This project is a static, front-end-only React prototype of a spreadsheet application, built to closely match the provided Figma design. It demonstrates a Google Sheets/Excel-like experience, including keyboard navigation and interactive UI elements.

## Live Preview

- [Live Site](https://spreadsheet-clone-react.vercel.app/)

## Assignment Overview

**Goal:**  
Recreate the spreadsheet view from the provided Figma design as a pixel-perfect, interactive React application.

**Figma Reference:**  
[Intern Design Assignment Figma](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)

### Tech Stack

- **React 19** (with Vite)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Custom table component** (no external table library)
- **No global state management** (local state only)

## Features

- Pixel-close layout to Figma
- Spreadsheet-like grid with editable cells
- All buttons and tabs are interactive (change state or log actions)
- Keyboard navigation within the grid (arrow keys)
- Add new columns dynamically

## Setup Instructions:

1. **Clone the repository:**

```bash
git clone https://github.com/Shubham-567/Spreadsheet-Clone.git cd Spreadsheet-Clone
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

## Trade-offs & Notes

- A custom table component was implemented for full control and to match the Figma design closely.
- All state is managed locally within components as required.
- Keyboard navigation is supported for a spreadsheet-like experience.
  <!-- - todo: add resize/hide feature and update this line-->
- Column resize/hide features are not included but can be added in the future.
- This is a static prototype; all data is stored in local component state and resets on reload.

## License

This project is licensed under the MIT License.
