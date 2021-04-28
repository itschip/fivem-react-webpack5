# fivem-react-webpack5

## How to use it
First you need to change the resource name in the `NuiProvider`.

```js
// index.tsx
<NuiProvider resource="resource-name">
      <App />
</NuiProvider>
```

Now that you got this going, you're basiclally ready to go.


## Using NuiEvents
Let's cover the basics!

To get data from the client, we need to take use of the `useNuiEvent` hook we get from `fivem-nui-react-lib`.

```js
const [visibility, setVisibility] = useState<boolean>(false);

useNuiEvent('RESOURCE', 'setVisibility', setVisibility);
```
So whats going on here? We are simply creating a state that uses the `setter` in our `useNuiEvent` hook to set the data to the state. 

On the client it looks like this
```lua
SendNUIMessage({
  app = "RESOURCE",
  method = "setVisibility",
  data = true
})
```

## Using Nui Callbacks
Yet to be written.
