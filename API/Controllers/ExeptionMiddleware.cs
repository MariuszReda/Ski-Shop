using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

public class ExeptionMiddleware
{
    private readonly RequestDelegate next;
    private readonly ILogger<ExeptionMiddleware> logger;
    private readonly IWebHostEnvironment environment;

    public ExeptionMiddleware(RequestDelegate next, ILogger<ExeptionMiddleware> logger, IWebHostEnvironment environment)
    {
        this.next = next;
        this.logger = logger;
        this.environment = environment;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch(Exception ex)
        {
            logger.LogError(ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 500;

            var rsponse = new ProblemDetails{

                Status= 500,
                Detail= environment.IsDevelopment() ? ex.StackTrace?.ToString() : "null",
                Title = ex.Message              
            };

           // var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
            var json = JsonSerializer.Serialize(rsponse);
            await context.Response.WriteAsync(json);
        }

    } 
}