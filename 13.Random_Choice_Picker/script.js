const textarea = document.querySelector('.textarea');
const tags = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener('keyup', e => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

const createTags = input => {
  const tagsArray = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tags.innerHTML = '';

  tagsArray.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tags.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highLightTag(randomTag);

    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highLightTag(randomTag);
    }, 100);
  }, times * 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const highLightTag = tag => {
  tag.classList.add('highlight');
};

const unHighLightTag = tag => {
  tag.classList.remove('highlight');
};
