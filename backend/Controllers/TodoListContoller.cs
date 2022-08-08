using Microsoft.AspNetCore.Mvc;
namespace simple_todo.Controllers;

[ApiController]
[Route("[controller]")]
public class TodoListController : ControllerBase
{
    private readonly ILogger<TodoListController> _logger;

    private List<object> todos = new List<object>();

    public TodoListController(ILogger<TodoListController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetTodoList")]
    public List<object> Get()
    {
        return todos;
    }
    [HttpPost(Name = "SetTodoList")]
    public string insertTodo(object todo)
    {
        todos.Add(todo);
        return "Todo added";
    }
}
