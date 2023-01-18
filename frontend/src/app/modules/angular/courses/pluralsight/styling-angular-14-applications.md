Brian Treese - Styling Angular 14 Apps
---

# Angular Components vs. Web Components

## Web Components
1.	Custom Elements
2.	HTML templates
    * not part of the DOM, only referenced
3.	Shadow DOM
    * (Style) Encapsulated DOM

# View Encapsulation
1. None
   * Use case: app component set to "None", you will get global styles
2. Emulated (default)
   * element **scoping attributes**
        1. _nghost 
        2. _ngcontent
3. ShadowDOM
   1. Native CSS Encapsulation
   2. Does not support legacy browser
   3. Does not support **host-context()** CSS pseudo class

# Adding Styles
1. Styles property
   * `styles` property in the `@Component()` decorator
2. Embedded
   * `<style>` tag in the component template
3. `<link>`
   * `<link rel="stylesheet">` tag in the component template 
4. `@import`
   * Attaches a seperate style tag to the head of the document
5. Inline
   * Using the style attribute directly on elements in the template
6. styleUrls
   * filename of the external CSS file in the `styleUrls` property `@Component()` metadata 

# Emulated CSS Selectors
- `:host`
    - styling based on the host element
- `:host-context`
  - checks if any parent element matches the selector criteria up to the root
- `::ng-deep`
  - content projection
    - `<ng-content>` 
    - IMPORTANT: If you do not want **pollute global style scope**, it is preferred to use it combined with the `:host` selector

# Scalable, Maintainable SCSS Architecture in Angular

## Global Styles
Use cases are:
- Browser Resets
- Colors
- Typography
- Layout
- Media Queries
- Utilities

## Naming Conventions

## Relative Units & Predictability

## Selectors & Overrides

## Structure & Organization

## Mixins & Variables

# Component Themes

- class based
- context based

# CSS Custom Properties

# Resources

[GitHub - Brian Treese - Pluralsight Styling Angular Apps](https://github.com/pluralsight-styling-angular-apps/demos-v2)
