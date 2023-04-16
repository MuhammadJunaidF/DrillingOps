using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DrillingOps.Domain.Entities;
using PlanningPortal.Application.Repositories;

namespace DrillingOps.Application.Repositories;

public interface IDrillEventRepositoryAsync : IGenericRepositoryAsync<EventDetails>
{
}
