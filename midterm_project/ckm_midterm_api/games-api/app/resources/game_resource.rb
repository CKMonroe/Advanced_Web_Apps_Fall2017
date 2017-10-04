class GameResource < JSONAPI::Resource
    attributes :title, :image, :system, :players, :description
end
