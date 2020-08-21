export const SevName = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return <div {...props} ref={ref}>Bin</div>
  });