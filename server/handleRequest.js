module.exports = (res, request, searchStr) => {
  if (request.ok) return request.json();
    else res.send(`ERROR: cannot search ${searchStr}`);
}