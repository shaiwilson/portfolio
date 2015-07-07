json.array!(@blogs) do |blog|
  json.extract! blog, :id, :title, :body, :published
  json.url blog_url(blog, format: :json)
end
