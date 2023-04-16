namespace PlanningPortal.Application.Common.Models;

public class PagingQuery
{
    public string Sorting { get; set; } = string.Empty;
    public string SortDirection { get; set; } = string.Empty;
    public int SkipCount { get; set; }
    public int MaxResultCount { get; set; }
}
