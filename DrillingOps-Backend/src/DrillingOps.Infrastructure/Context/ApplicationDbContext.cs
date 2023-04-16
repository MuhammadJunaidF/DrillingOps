using System.Reflection;
using PlanningPortal.Domain.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using PlanningPortal.Application.Common.Interfaces;
using DrillingOps.Domain.Entities;

namespace PlanningPortal.Infrastructure.Persistence;

public class ApplicationDbContext : DbContext, IApplicationDbContext
{
    //private readonly IDomainEventService _domainEventService;

    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }
    public virtual DbSet<Event> Event { get; set; }
    public virtual DbSet<EventDetails> EventDetails { get; set; }

    public async Task<int> SaveChangesAsync()
    {
        return await base.SaveChangesAsync();
    }

    public int SaveChanges()
    {
        return base.SaveChanges();
    }
    private async Task DispatchEvents(DomainEvent[] events)
    {
        //foreach (var @event in events)
        //{
        //    @event.IsPublished = true;
        //    await _domainEventService.Publish(@event);
        //}
    }
}
