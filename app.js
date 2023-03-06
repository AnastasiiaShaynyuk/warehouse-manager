const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

let packageElem = document.getElementById('packages')


function drawPackages(packages) {
  packageElem.innerHTML = '';
  packages.forEach(p => {
    const packageDiv = document.createElement('p');
    packageDiv.innerHTML = `
      <p>Tracking Number: ${p.trackingNumber}</p>
      <p>To: ${p.to}</p>
      <hr>
    `;
    packageElem.appendChild(packageDiv);
    console.log(packageElem, 'packages')
  });
}

function drawFragilePackages() {
  const fragilePackages = packages.filter(p => p.isFragile);
  drawPackages(fragilePackages);
}

function filterByPriorityLevel(packages, priorityLevel) {
  return packages.filter(p => p.priorityLevel === priorityLevel);
  drawPackages(priorityPackages);
}

function drawHeavyPackages() {
  const heavyPackages = packages.filter(p => p.weight > 5);
  drawPackages(heavyPackages);
}

function drawAllPackages() {
  drawPackages(packages);
}

drawPackages(packages);

