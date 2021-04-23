RegisterCommand('nui:open', function()
  SendNUIMessage({
    app = "RESOURCE",
    method = "setVisibility",
    data = true
  })
end, false)
