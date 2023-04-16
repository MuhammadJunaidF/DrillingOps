using PlanningPortal.WebApi.Extensions;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using PlanningPortal.Application;
using PlanningPortal.Infrastructure.Persistance;
using PlanningPortal.Application.Common.Interfaces;
using PlanningPortal.Infrastructure.Services;
using Serilog;
using Microsoft.AspNetCore.Mvc;

namespace PlanningPortal.WebApi;

public class Startup
{
    public IConfiguration Config { get; }

    public Startup(IConfiguration configuration)
    {
        Config = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication();
        services.AddPersistenceInfrastructure(Config);
        services.AddSwaggerExtension();
        services.AddControllers();
        services.AddApiVersioningExtension();
        services.AddHealthChecks();

        services.AddMediatR(GetAssembliesForMediatR().ToArray());
        services.AddScoped<IDomainEventService, DomainEventService>();

        services.AddControllersWithViews(options => options.Filters.Add(new RequireHttpsAttribute()))
                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                );
        services.AddCors(o => o.AddPolicy("AllowAllOrigins", builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        }));
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Error");
            app.UseHsts();
        }
        app.UseCors(options => options
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowed(origin => true) // allow any origin
            .AllowAnyOrigin());

        app.UseSerilogRequestLogging();

        app.UseHttpsRedirection();
        app.UseRouting();
        //app.UseAuthentication();
        //app.UseAuthorization();
        app.UseSwaggerExtension();
        app.UseErrorHandlingMiddleware();
        app.UseHealthChecks("/health");

        app.UseEndpoints(endpoints =>
         {
             endpoints.MapControllers();
         });
    }

    private static List<Assembly> GetAssembliesForMediatR()
    {
        List<Assembly> listOfAssemblies = new List<Assembly>();
        var mainAsm = Assembly.GetEntryAssembly();
        listOfAssemblies.Add(mainAsm);

        foreach (var refAsmName in mainAsm.GetReferencedAssemblies()
            .Where(t => t.Name.StartsWith("PlanningPortal.", StringComparison.OrdinalIgnoreCase)))
        {
            listOfAssemblies.Add(Assembly.Load(refAsmName));
        }
        return listOfAssemblies;
    }
}
