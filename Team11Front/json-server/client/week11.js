import makeRequest from './authHelpers.js';
import Auth from './auth.js';

var button = document.getElementById('submit');
button.addEventListener('click', login, true);

var auth = new Auth();
function login() {
    auth.login(getPosts)
};
async function getPosts() {
    try {
      const data = await makeRequest('posts', 'GET', null, myAuth.token);
      // make sure the element is shown
      document.getElementById('content').classList.remove('hidden');
      console.log(data);
      var ul = document.getElementById('list');
      ul.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data[i].title));
        ul.appendChild(li);
      }
      myErrors.clearError();
    } catch (error) {
      // if there were any errors display them
      myErrors.handleError(error);
    }
  }
  document.getElementById('createSubmit').addEventListener('click', () => {
    createPost();
  });
  async function createPost() {
    const form = document.forms.postForm;
    console.dir(form);
    if (form.title.validity.valid && form.content.validity.valid) {
      myErrors.clearError();
      const data = {
        title: form.title.value,
        content: form.content.value
      };
      try {
        const res = await makeRequest('posts', 'POST', data, myAuth.token);
        console.log('Post create:', data);
        form.title.value = '';
        form.content.value = '';
        getPosts();
      } catch (error) {
        myErrors.handleError(error);
      }
    } else {
      myErrors.displayError({ message: 'Title and Content are required' });
    }
  }