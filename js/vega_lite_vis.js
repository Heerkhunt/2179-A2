const charts = [
  ["#vis1", "js/vis1_choropleth.vg.json"],
  ["#vis2", "js/vis2_dot_density.vg.json"],
  ["#vis3", "js/vis3_lollipop.vg.json"],
  ["#vis4", "js/vis4_heatmap.vg.json"],
  ["#vis5", "js/vis5_small_multiples.vg.json"],
  ["#vis6", "js/vis6_dumbbell.vg.json"],
  ["#vis7", "js/vis7_streamgraph.vg.json"],
  ["#vis8", "js/vis8_horizon.vg.json"],
  ["#vis9", "js/vis9_treemap.vg.json"],
  ["#vis10", "js/vis10_connected_scatter.vg.json"],
  ["#vis11", "js/vis11_flow_map.vg.json"],
  ["#vis12", "js/vis12_network.vg.json"],
  ["#vis13", "js/vis13_custom_combo.vg.json"]
];

charts.forEach(([id, spec]) =>
  vegaEmbed(id, spec, {
    actions: false,
    renderer: "svg",
    config: {
      font: "Inter",
      legend: {
        labelFont: "Inter",
        titleFont: "Inter",
        labelFontSize: 11,
        titleFontSize: 12
      },
      axis: {
        labelFont: "Inter",
        titleFont: "Inter"
      },
      title: {
        font: "Inter",
        subtitleFont: "Inter"
      }
    }
  }).catch(console.error)
);
