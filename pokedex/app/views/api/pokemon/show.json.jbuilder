json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :items
json.image_url asset_path(@pokemon.image_url) 
