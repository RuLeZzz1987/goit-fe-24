const items = []

i++;
i = i + 1
i += 1;

i-- + --i;
i = i - 1;
i -= 1;

function removeItem(item) {
  let idx = items.indexOf(item);

  items.splice(idx, 1);
}