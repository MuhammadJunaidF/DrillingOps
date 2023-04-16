using PlanningPortal.Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PlanningPortal.Application.Common.DTOs;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using PlanningPortal.Application.Common.Wrappers;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using DrillingOps.Application.Services.Interfaces;
using DrillingOps.Application.Services;
using DrillingOps.Application.Repositories;
using DrillingOps.Infrastructure.Persistance.Repository;

namespace PlanningPortal.Infrastructure.Persistance;

public static class DependencyInjection
{
    public static void AddPersistenceInfrastructure(this IServiceCollection services, IConfiguration configuration, bool isFromAzure = false)
    {

        services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(
            configuration.GetConnectionString("DefaultConnection"),
            sqlServerOptions =>
            {
                sqlServerOptions.CommandTimeout(300);
                sqlServerOptions.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName);
            }));



        services.AddTransient<IDrillEventService, DrillEventService>();

        services.AddScoped<IDrillEventRepositoryAsync, DrillEventRepositoryAsync>();
    }
}
