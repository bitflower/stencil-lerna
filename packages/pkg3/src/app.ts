import feathers from '@feathersjs/feathers';

export const app = feathers();

// Register a simple todo service that returns the name and some text
app.use('todos', {
  async get(name: string) {
    // Return an object in the form of { name, text }
    return {
      name,
      text: `You have to do ${name}`
    };
  }
});

// A function that gets and logs a todo from the service
async function getTodo(name: string) {
  // Get the service we registered above
  const service = app.service('todos');
  // Call the `get` method with a name
  const todo = await service.get(name);

  // Log the todo we got back
  console.log(todo);
}

getTodo('dishes');
