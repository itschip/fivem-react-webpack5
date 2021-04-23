RegisterCommand('nui:open', function()
  SendNUIMessage({
    app = "RESOURCE",
    method = "setVisibilty",
    data = true
  })
end, false)