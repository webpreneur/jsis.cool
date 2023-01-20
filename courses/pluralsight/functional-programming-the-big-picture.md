[Pluralsight - Nathan Taylor - Functional Programming: The Big Picture](https://app.pluralsight.com/library/courses/functional-programming-big-picture/table-of-contents)

# Programming Paradigms
A paradigm is a style of solving problems.

- FP
- OOP (Java)
  - classes, inheritance, encapsulation
- Procedural
- Declarative (SQL)

# Functional Programming
- it is a paradigm (a style of solving problems)
- pure functions
    - same input -> same output
    - avoids
      - changing-state &
      - mutable data
    - responsible for doing one thing only
    - could be tested early

## OOP vs FP

|Object-oriented        |Functional Programming |
|-----------------------|---------------------- |
|More data structures   | Fewer data structures (Lists, Maps)|
|Fewer functions / DS   | More funcs / DS       |


```c++
// --- OBJECT ORIENTED ---
// addBook always updates the state of the shopping cart class
shoppingCart.AddBook('How to Train your Dragon');
shoppingCart.GetTotal(); //$12.29

public float GetTotal()
{
    return Items.sum(i => i.price);
}
```

```javascript
// --- FUNCTIONAL ---
const updatedCart = add(shoppingCart, '');
// getTotal will always return the same output based on the cart input
const price = getTotal(updatedCart);
```