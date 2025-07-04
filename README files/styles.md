# Using SCSS with Vite (>7) in React

## Installing SCSS

To use SCSS in a Vite-powered React project (Vite version 7 or higher):

1. **Install `sass`**  
   Run the following command in your project directory:

   ```bash
   npm install --save-dev sass
   ```

   or

   ```bash
   yarn add --dev sass
   ```

2. **Import SCSS Files**  
   You can now import `.scss` files directly into your React components:
   ```jsx
   import './App.scss'
   ```

## Styling in React

React supports several ways to add styles:

### 1. CSS/SCSS Files

- Create `.css` or `.scss` files and import them into your components.
- SCSS allows you to use variables, nesting, and other Sass features.

### 2. CSS Modules

- For locally scoped styles, rename your file to `Component.module.scss`.
- Import as:

  ```jsx
  import styles from './Component.module.scss'

  function Component() {
    return <div className={styles.example}>Hello</div>
  }
  ```

### 3. Inline Styles

- Use the `style` prop for dynamic or simple styles:
  ```jsx
  <div style={{ color: 'red', fontWeight: 'bold' }}>Hello</div>
  ```

---

**References:**

- [Vite CSS Pre-processors](https://vitejs.dev/guide/features.html#css-pre-processors)
- [React Styling and CSS](https://react.dev/learn#styling-your-components)
